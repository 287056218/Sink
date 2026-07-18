import type { VerifyResponse } from '@/types'

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server)
    return

  if (!to.path.startsWith('/dashboard'))
    return

  const { setAuthSession, clearAuthSession } = useAuthSession()

  try {
    const response = await useAPI<VerifyResponse>('/api/verify')
    setAuthSession(response)

  }
  catch {
    clearAuthSession()
    if (to.path !== '/dashboard/login')
      return abortNavigation()
  }
})
