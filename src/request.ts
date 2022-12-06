export interface Response {
  id: number
  link: string
  slug: string
  createdAt: string
}

export async function handleRequest (endpoint: string, token: string) {
  const record = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ link: 'https://example.com' }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': token
    },
  }).then<Response>(r => r.json())

  await fetch(endpoint, {
    method: 'DELETE',
    body: JSON.stringify({ id: record.id }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': token
    },
  }).then(r => r.json())
}
