import { Cart, ProductCategory, ProductVariant, Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductCollection } from "@medusajs/product"

export type FeaturedProduct = {
  id: string
  title: string
  handle: string
  thumbnail?: string
}

export type ProductPreviewType = {
  id: string
  title: string
  handle: string | null
  thumbnail: string | null
  created_at?: Date
  price?: {
    calculated_price: string
    original_price: string
    difference: string
    price_type: "default" | "sale"
  }
  isFeatured?: boolean
}

export type ProductCollectionWithPreviews = Omit<
  ProductCollection,
  "products"
> & {
  products: ProductPreviewType[]
}

export type InfiniteProductPage = {
  response: {
    products: PricedProduct[]
    count: number
  }
}

export type ProductVariantInfo = Pick<ProductVariant, "prices">

export type RegionInfo = Pick<Region, "currency_code" | "tax_code" | "tax_rate">

export type CartWithCheckoutStep = Omit<
  Cart,
  "beforeInsert" | "beforeUpdate" | "afterUpdateOrLoad"
> & {
  checkout_step: "address" | "delivery" | "payment"
}

export type ProductCategoryWithChildren = Omit<
  ProductCategory,
  "category_children"
> & {
  category_children: ProductCategory[]
  category_parent?: ProductCategory
}



export const SideMenuItems = [
  {
     id:1,
     title:"New Arrivals",
     href:"/new-arrival"
  },
  {
    id:2,
    title:"Store",
    href:"/store"
  },
  {
    id:3,
    title:"best Selling",
    href:"/best-selling"
  },
  {
    id:4,
    title:"snitch luxe",
    href:"/snitch-luxe"
  },
  {
    id:5,
    title:"suit & blazers",
    href:"/suit-&-blazers"
  },
  {
    id:6,
    title:"shop",
    shop:[
          {
            id:1,
            title:"shirt",
            shirt:[
             {  id:1,
               title:"Plane",
              },
              {
                id:2,
                title:"Stripes"
              },
              {
                   id:3,
                   title:"Checks"
              },{
                id:4,
                title:"Printed"
              },
              {
                  id:5,
                  title:"Oversized"
              },
              {
                  id:6,
                  title:"Overshirt"
              },
              {
                id:7,
                 title:"Crochet"
              }
            ]
          }, 
          {
               id:2,
               title:"T-shirt",
               Tshirt:[
                     {
                     id:1,
                     title:"Basic",
                
                    },{
                      id:2,
                      title:"Oversized"
                    },{
                      id:3,
                      title:"Polo",
                    },
                    {
                      id:4,
                      title:"Graphic Printed"
                    }
               ]
          },
          {
            id:3,
            title:"Trousers",
            Trousers:[
                  {
                  id:1,
                  title:"Chino",
             
                 },{
                   id:2,
                   title:"Formal"
                 },{
                   id:3,
                   title:"Linen",
                 },
                 {
                   id:4,
                   title:"Graphic Printed"
                 }
            ]
       },
       {
        id:4,
        title:"Jeans",
        Jeans:[
              {
              id:1,
              title:"Baggy",
         
             },{
               id:2,
               title:"Straight"
             },{
               id:3,
               title:"Slim",
             },
             {
               id:4,
               title:"Bootcut"
             }
        ]
   }
          
    ]

  },
  {
    id:7,
    title:"Track Order",
    href:"/track-Order"
  },{
    id:8,
    title:"place a return",
    href:"return-order"
  },
  {
      id:9,
      title:"Affilate Programe",
      href:"affilate-programe"
  },{
    id:10,
    title:"customer support",
    href:"/help"
  },{
       id:11,
       title:"visit store",
       href:"/store"
  },
  {
    id:12,
    title:"relove",
    href:"/relove"
  }
    
]
