// @ts-check
import { config, fields, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local'
  },

  singletons: {
    site: singleton({
      label: 'Site Settings',
      path: 'src/data/site/site',
      format: 'json',
      schema: {
        title: fields.text({
          label: 'Site Title',
          validation: {
            isRequired: true
          }
        }),
        description: fields.text({
          label: 'Site Description',
          multiline: true,
          validation: {
            isRequired: true
          }
        }),
        favicon: fields.image({
          label: 'Favicon',
          directory: 'public',
          publicPath: '',
          validation: {
            isRequired: true
          }
        })
      }
    }),

    home: singleton({
      label: 'Homepage Settings',
      path: 'src/data/home/home',
      format: 'json',
      schema: {
        logo: fields.image({
          label: 'Logo',
          directory: 'src/assets/home',
          publicPath: '~/assets/home',
          validation: {
            isRequired: true
          }
        })
      }
    })
  }
})
