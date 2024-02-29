## ⚠️⚠️⚠️ As of 29/02/2024 this repo has been moved to GitLab at https://gitlab.com/alepouna.dev/fastify-ejs-page-builder

# fastify-ejs-page-builder

A litle tool to be used along side EJS and Fastify to allow you to inject variables to all your fastify routes. This is useful for injecting things like page meta data, page titles, etc. that are usually the same across all pages. 

## Usage

On your routes

```js
import { PageBuilder } from 'fastify-ejs-page-builder';

// ... your code here

const page = new PageBuilder(`./src/webserver/pages/common/builder.ejs`); //This is the path to your builder file
page.setPageTitle('My Page'); 
page.setPageDescription('This is a great page');
page.setPageKeywords('page, great, awesome');
page.setPageNav(true);
page.setTheme('dark');
page.setCustomObject('myCustomObject', { foo: 'bar' }); //You can even set custom objects to be used in your common files as you like

return reply.render(page.getBuilderPath(), {

    page: page.getPage(),

    // ... your code here

});
```

Your page will now have available variables under the `page` object so you can do things like:

```html
<head>
    <title><%= page.title %></title>
    <meta name="description" content="<%= page.description %>">
    <meta name="keywords" content="<%= page.keywords %>">
</head>
```

## Functions 

| Function | Description |
| --- | --- |
| setPageTitle(title: string) | Sets the page title |
| setPageDescription(description: string) | Sets the page description |
| setPageKeywords(keywords: string) | Sets the page keywords |
| setPageNav(show: boolean) | Sets if the page should show the nav or not |
| setTheme(theme: string) | Sets the page theme |
| setCustomObject(key: string, value: any) | Sets a custom object to be used in your common files |
| getPage() | Returns the page object |
| getBuilderPath() | Returns the path to your builder file |

## Page Object

Variables available in the page object (injected in ejs under `page` so you can use them like `<%= page.title %>`)

| Variable | Description |
| --- | --- |
| title | The page title |
| description | The page description |
| keywords | The page keywords |
| nav | If the page should show the nav or not |
| theme | The page theme |

## Contributing

Feel free to open issues and pull requests. Currently I don't have any plans for this, mostly because it's just a class with a few functions, but if you have any ideas (like automatically injecting the page object in the reply.render function) feel free to open an issue or a pull request.

## License

In LICENSE file.
