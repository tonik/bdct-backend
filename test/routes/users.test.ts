import { test } from 'tap'
import { build } from '../helper'

test('GET /users', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/users'
  })

  t.equal(res.statusCode, 200)
  t.equal(res.json().length, 2)
})


test('GET /users/:id', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/users/3640c80d-13fd-4a20-b8ef-f9cb2943508d'
  })

  t.equal(res.statusCode, 200)
  t.equal(res.json().id, '3640c80d-13fd-4a20-b8ef-f9cb2943508d')
})