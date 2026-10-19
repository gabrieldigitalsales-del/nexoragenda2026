const API_URL = 'https://upihgyqkcyqjqvclujpm.supabase.co/functions/v1/nexor-agenda-2026-api'
export const hasSupabase = true
let token = sessionStorage.getItem('nexor_agenda_token') || ''
async function request(payload, auth = true) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(auth && token ? {Authorization:`Bearer ${token}`} : {}) },
    body: JSON.stringify(payload)
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    if (res.status === 401 && auth) { token = ''; sessionStorage.removeItem('nexor_agenda_token'); window.dispatchEvent(new Event('nexor:logout')) }
    return { data: null, error: {message:body.error || 'Não foi possível acessar o servidor'} }
  }
  return body
}
export const agendaAuth = {
  async login(password) {
    const result = await request({op:'login',password},false)
    if (result.error) return result
    token = result.token
    sessionStorage.setItem('nexor_agenda_token',token)
    return {data:{session:true},error:null}
  },
  async check() {
    if (!token) return false
    const r = await request({op:'check'})
    return Boolean(r.ok)
  },
  async logout() {
    if (token) await request({op:'logout'})
    token = ''
    sessionStorage.removeItem('nexor_agenda_token')
  }
}
class Query {
  constructor(table) {this.table=table;this.action='select';this.filters=[];this.orders=[];this.values=null;this.returning=false;this.singleType=''}
  select() {this.returning=true;return this}
  order(col, opts={}) {this.orders.push({col,ascending:opts.ascending!==false});return this}
  eq(col,value) {this.filters.push({type:'eq',col,value});return this}
  in(col,value) {this.filters.push({type:'in',col,value});return this}
  maybeSingle() {this.singleType='maybeSingle';return this}
  single() {this.singleType='single';return this}
  insert(values) {this.action='insert';this.values=values;return this}
  update(values) {this.action='update';this.values=values;return this}
  upsert(values) {this.action='upsert';this.values=values;return this}
  delete() {this.action='delete';return this}
  then(resolve,reject) {return request({op:'query',table:this.table,action:this.action,values:this.values,filters:this.filters,orders:this.orders,returning:this.returning,single:this.singleType}).then(resolve,reject)}
}
export const supabase = {from: table => new Query(table)}
