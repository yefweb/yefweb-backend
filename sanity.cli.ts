import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: import.meta.env.VITE_APP_SANITY_STUDIO_PROJECT_ID,
    dataset: 'production',
  },
})
