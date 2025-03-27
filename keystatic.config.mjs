// @ts-check

import { config, fields, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local'
  },

  singletons: {
    site: singleton({
      label: 'Site Configuration',
      path: 'src/content/site/site',
      format: 'json',
      schema: {
        title: fields.text({
          label: 'Site Title',
          validation: {
            isRequired: true,
            length: {
              max: 64
            }
          }
        }),
        description: fields.text({
          label: 'Site Description',
          multiline: true,
          validation: {
            isRequired: true,
            length: {
              max: 160
            }
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
      label: 'Home Section',
      path: 'src/content/home/home',
      format: 'json',
      schema: {
        logo: fields.image({
          label: 'Logo',
          directory: 'src/assets/home',
          publicPath: '~/assets/home',
          validation: {
            isRequired: true
          }
        }),
        'background-image': fields.image({
          label: 'Background Image',
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
