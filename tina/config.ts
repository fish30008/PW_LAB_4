import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "src",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Site Content",
        path: "src/content",
        format: "json",
        match: {
          include: "site"
        },
        fields: [
          {
            name: "meta",
            label: "Meta",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", required: true },
              { name: "author", label: "Author", type: "string", required: true }
            ]
          },
          {
            name: "navigation",
            label: "Navigation",
            type: "object",
            fields: [
              { name: "brand", label: "Brand", type: "string", required: true },
              {
                name: "items",
                label: "Menu Items",
                type: "object",
                list: true,
                fields: [
                  { name: "label", label: "Label", type: "string", required: true },
                  { name: "href", label: "Href", type: "string", required: true }
                ]
              }
            ]
          },
          {
            name: "hero",
            label: "Hero",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", required: true },
              {
                name: "button",
                label: "Button",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string", required: true },
                  { name: "href", label: "Href", type: "string", required: true }
                ]
              }
            ]
          },
          {
            name: "features",
            label: "Features",
            type: "object",
            fields: [
              { name: "eyebrow", label: "Eyebrow", type: "string", required: true },
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", required: true },
              {
                name: "items",
                label: "Feature Cards",
                type: "object",
                list: true,
                fields: [
                  { name: "icon", label: "Icon (HTML entity)", type: "string", required: true },
                  { name: "title", label: "Title", type: "string", required: true },
                  { name: "description", label: "Description", type: "string", required: true }
                ]
              }
            ]
          },
          {
            name: "products",
            label: "Products",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", required: true },
              {
                name: "items",
                label: "Product Cards",
                type: "object",
                list: true,
                fields: [
                  { name: "title", label: "Title", type: "string", required: true },
                  { name: "description", label: "Description", type: "string", required: true },
                  { name: "price", label: "Price", type: "string", required: true },
                  { name: "image", label: "Image Path", type: "string", required: true },
                  { name: "imageAlt", label: "Image Alt", type: "string", required: true }
                ]
              }
            ]
          },
          {
            name: "mobileHighlight",
            label: "Mobile Highlight",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", required: true },
              { name: "image", label: "Image Path", type: "string", required: true },
              { name: "imageAlt", label: "Image Alt", type: "string", required: true }
            ]
          },
          {
            name: "testimonials",
            label: "Testimonials",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", required: true },
              {
                name: "items",
                label: "Testimonial Cards",
                type: "object",
                list: true,
                fields: [
                  { name: "text", label: "Text", type: "string", required: true },
                  { name: "author", label: "Author", type: "string", required: true },
                  { name: "role", label: "Role", type: "string", required: true }
                ]
              }
            ]
          },
          {
            name: "subscribe",
            label: "Subscribe Section",
            type: "object",
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", required: true },
              {
                name: "button",
                label: "Button",
                type: "object",
                fields: [
                  { name: "label", label: "Label", type: "string", required: true },
                  { name: "href", label: "Href", type: "string", required: true }
                ]
              }
            ]
          },
          {
            name: "stickyCta",
            label: "Sticky CTA",
            type: "object",
            fields: [
              { name: "label", label: "Label", type: "string", required: true },
              { name: "href", label: "Href", type: "string", required: true }
            ]
          },
          {
            name: "mascot",
            label: "Mascot",
            type: "object",
            fields: [
              { name: "image", label: "Image Path", type: "string", required: true },
              { name: "imageAlt", label: "Image Alt", type: "string", required: true },
              { name: "message", label: "Message", type: "string", required: true }
            ]
          },
          {
            name: "footer",
            label: "Footer",
            type: "object",
            fields: [
              { name: "brand", label: "Brand", type: "string", required: true },
              { name: "description", label: "Description", type: "string", required: true },
              {
                name: "socialLinks",
                label: "Social Links",
                type: "object",
                list: true,
                fields: [
                  { name: "label", label: "Label", type: "string", required: true },
                  { name: "href", label: "Href", type: "string", required: true }
                ]
              },
              { name: "copyright", label: "Copyright (HTML allowed)", type: "string", required: true }
            ]
          }
        ]
      }
    ]
  }
});
