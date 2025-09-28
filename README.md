![@mixxtor/adonisjs-shopify](https://socialify.git.ci/mixxtor/adonisjs-shopify/image?description=1&descriptionEditable=Shopify%20adapter%20for%20AdonisJS.&font=Jost&forks=1&issues=1&logo=data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20style%3D%22enable-background%3Anew%200%200%20109.5%20124.5%22%20viewBox%3D%220%200%20109.5%20124.5%22%3E%3Cpath%20d%3D%22M95.9%2023.9c-.1-.6-.6-1-1.1-1-.5%200-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.7-.7-2.2-.5-2.7-.3%200%200-1.4.4-3.7%201.1-.4-1.3-1-2.8-1.8-4.4-2.6-5-6.5-7.7-11.1-7.7-.3%200-.6%200-1%20.1-.1-.2-.3-.3-.4-.5C54.7.9%2052.1-.1%2049%200c-6%20.2-12%204.5-16.8%2012.2-3.4%205.4-6%2012.2-6.8%2017.5-6.9%202.1-11.7%203.6-11.8%203.7-3.5%201.1-3.6%201.2-4%204.5-.3%202.5-9.5%2073-9.5%2073l76.4%2013.2%2033.1-8.2c-.1-.1-13.6-91.4-13.7-92zm-28.7-7.1c-1.8.5-3.8%201.2-5.9%201.8%200-3-.4-7.3-1.8-10.9%204.5.9%206.7%206%207.7%209.1zm-10%203.1c-4%201.2-8.4%202.6-12.8%203.9%201.2-4.7%203.6-9.4%206.4-12.5%201.1-1.1%202.6-2.4%204.3-3.2%201.8%203.5%202.2%208.4%202.1%2011.8zM49.1%204c1.4%200%202.6.3%203.6.9-1.6.9-3.2%202.1-4.7%203.7-3.8%204.1-6.7%2010.5-7.9%2016.6-3.6%201.1-7.2%202.2-10.5%203.2C31.7%2018.8%2039.8%204.3%2049.1%204z%22%20style%3D%22fill%3A%2395bf47%22%2F%3E%3Cpath%20d%3D%22M94.8%2022.9c-.5%200-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.3-.3-.6-.4-1-.5V124l33.1-8.2S96%2024.5%2095.9%2023.8c-.1-.5-.6-.9-1.1-.9z%22%20style%3D%22fill%3A%235e8e3e%22%2F%3E%3Cpath%20d%3D%22m58%2039.9-3.8%2014.4s-4.3-2-9.4-1.6c-7.5.5-7.5%205.2-7.5%206.4.4%206.4%2017.3%207.8%2018.3%2022.9.7%2011.9-6.3%2020-16.4%2020.6-12.2.8-18.9-6.4-18.9-6.4l2.6-11s6.7%205.1%2012.1%204.7c3.5-.2%204.8-3.1%204.7-5.1-.5-8.4-14.3-7.9-15.2-21.7-.7-11.6%206.9-23.4%2023.7-24.4%206.5-.5%209.8%201.2%209.8%201.2z%22%20style%3D%22fill%3A%23fff%22%2F%3E%3C%2Fsvg%3E&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Auto)

# Introduce

A comprehensive Shopify integration package for AdonisJS with full TypeScript support and type inference for REST resources.

## Installation

```bash
npm install @mixxtor/adonisjs-shopify
```

## Setup

### 1. Configure the Package

First, add the package to your AdonisJS project:

```bash
node ace configure @mixxtor/adonisjs-shopify
```

### 2. Environment Variables

Add your Shopify app credentials to `.env`:

```env
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SHOPIFY_API_VERSION=2025-01
SHOPIFY_HOST_NAME=your-app-domain.com
SHOPIFY_SCOPES=read_products,write_products,read_orders
```

### 3. Provider Registration

The package provider should be automatically registered in `adonisrc.ts`:

```typescript
// adonisrc.ts
export default defineConfig({
  providers: [
    // ... other providers
    () => import('@mixxtor/adonisjs-shopify/providers/shopify_provider')
  ]
})
```


### 4. Create Configuration File

Create `config/shopify.ts`:

```typescript
import { defineConfig } from '@mixxtor/adonisjs-shopify'
import { RestResources } from '@shopify/shopify-api/rest/admin/2025-07'
import env from '#start/env'

// Extend the container types for proper REST resource type inference
declare module '@mixxtor/adonisjs-shopify/types' {
  interface ShopifyRestResources extends RestResources {}
}

const shopifyConfig = defineConfig({
  /**
   * Shopify configurations
   * @see https://github.com/Shopify/shopify-app-js/blob/main/packages/apps/shopify-api/docs/reference/shopifyApi.md
   */
  app: {
    apiKey: env.get('SHOPIFY_API_KEY'),
    apiSecretKey: env.get('SHOPIFY_API_SECRET'),
    apiVersion: env.get('SHOPIFY_API_VERSION', '2025-01'),
    hostName: env.get('SHOPIFY_HOST_NAME'),
    scopes: env.get('SHOPIFY_SCOPES', '').split(','),
    scopes: env.get('SHOPIFY_API_SCOPES', 'read_products')?.split(','),
    hostScheme: 'https',
    hostName: env.get('SHOPIFY_HOST_NAME'),
    isEmbeddedApp: true,
    isPrivateApp: false,
    // Add other Shopify configuration options as needed
  },

  /**
   * A list of additional Shopify apps (e.g., for development or testing)
   * whose credentials are also accepted when validating requests.
   */
  trusted_app: env.get('SHOPIFY_API_TRUSTED_APPS'),

  /**
   * Defines the Shopify webhook topics that this app should register,
   * along with their corresponding handler URLs.
   */
  webhooks: {
    [SHOPIFY.WEBHOOK_TOPICS.SHOP_UPDATE]: 'https://myapp.com/webhooks/shops/update', // Updates shop information if any change is made from Shopify
    [SHOPIFY.WEBHOOK_TOPICS.APP_UNINSTALLED]: 'https://myapp.com/webhooks/shops/uninstall', // Uninstalls the app
  }
})

export default shopifyConfig
```

### 5. Export Service (Optional)

For easier access across your app, export the service in `start/service.ts`:

```typescript
import app from '@adonisjs/core/services/app'

export const shopify = await app.container.make('shopify')
```

## Usage

#### 1. Container-based Service (Recommended)

```typescript
// In your services/controllers
import { inject } from '@adonisjs/core'
import type { ShopifyService } from '@mixxtor/adonisjs-shopify/types'

@inject()
export default class ProductService {
  constructor(private shopify: ShopifyService) {}

  async getProducts(session: Session) {
    // Full type inference for Product class
    const products = await this.shopify.api.rest.Product.all({ session })
    return products.data
  }

  async createProduct(session: Session, productData: any) {
    const product = new this.shopify.api.rest.Product({ session })
    product.title = productData.title
    product.body_html = productData.description
    
    await product.save()
    return product
  }
}
```

#### 2. Direct Service Import

```typescript
// Alternative: Import service directly
import shopify from '@mixxtor/adonisjs-shopify/services/main'

export default class ShopController {
  async index({ session }: HttpContext) {
    const products = await shopify.api.rest.Product.all({ 
      session: session.shopifySession 
    })
    
    return products.data
  }
}
```

## Authentication

### OAuth Flow

```typescript
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(private shopify: ShopifyService) {}

  async redirect({ request, response }: HttpContext) {
    const shop = request.input('shop')
    
    const authUrl = await this.shopify.auth.begin({
      shop,
      callbackPath: '/auth/callback',
      isOnline: false
    })
    
    return response.redirect(authUrl)
  }

  async callback({ request, response }: HttpContext) {
    const authResult = await this.shopify.auth.callback({
      rawRequest: request.request,
      rawResponse: response.response
    })
    
    if (authResult.session) {
      // Store session and redirect to app
      return response.redirect('/dashboard')
    }
    
    return response.badRequest('Authentication failed')
  }
}
```

## Webhooks

```typescript
import type { HttpContext } from '@adonisjs/core/http'

export default class WebhookController {
  async handle({ request, response }: HttpContext) {
    try {
      const isValid = await shopify.webhooks.validate({
        rawBody: request.raw(),
        rawRequest: request.request
      })
      
      if (!isValid) {
        return response.unauthorized()
      }
      
      const topic = request.header('x-shopify-topic')
      const payload = request.body()
      
      // Handle webhook based on topic
      switch (topic) {
        case 'orders/create':
          await this.handleOrderCreate(payload)
          break
        case 'products/update':
          await this.handleProductUpdate(payload)
          break
      }
      
      return response.ok()
    } catch (error) {
      return response.internalServerError()
    }
  }
}
```

### Benefits

- ✅ Full IntelliSense support for all Shopify REST resources
- ✅ Type-safe API calls with proper parameter validation
- ✅ Auto-completion for methods and properties
- ✅ TypeScript error detection for invalid resources/methods
- ✅ Built-in OAuth authentication flow
- ✅ Webhook validation and handling
- ✅ Session management

### Supported REST Resources

All resources from `@shopify/shopify-api/rest/admin/2025-07`:
- `Product`, `Variant`, `Collection`
- `Customer`, `Order`, `DraftOrder`
- `Inventory`, `Location`, `FulfillmentService`
- `Webhook`, `ScriptTag`, `Asset`
- `Shop`, `Country`, `Province`
- And 60+ more resources with full type support...

## License

MIT