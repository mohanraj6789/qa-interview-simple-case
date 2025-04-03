import { test as setup } from '@playwright/test'
import { promises as fs } from 'fs'
//import { setupDir, setupFile } from '../playwright.config'

export const existingUsers = [
  {
    email: `signup${Date.now()}@test.com`,
    password: 'testPassword!',
    firstName: `signupfirst${Math.floor(10 + Math.random() * 90)}`,
    lastName: `signupLast${Math.floor(10 + Math.random() * 90)}`,
  },
  {
    email: 'Unregistereduser@stage.com',
    password: 'testPassword!',
    //firstName: 'Testuser',
    //lastName: 'Lastuser',
  },
  {
    email: 'Devloginfirst@login.com',
    password: 'testPassword!',
    firstName: 'Devloginfirst',
    lastName: 'Devloginlast',
  },
] as const

setup('localStorage', async () => {
  const storageState = {
    cookies: [],
    origins: [
      {
        origin: 'http://localhost:8080',
        localStorage: [
          { name: 'users', value: JSON.stringify({ users: existingUsers }) },
        ],
      },
    ],
  }

  //await fs.mkdir(setupDir, { recursive: true })
  //await fs.writeFile(setupFile, JSON.stringify(storageState, null, 2))
})
