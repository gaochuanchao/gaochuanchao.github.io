To adjust the category/order in the top navigation, edit:

[_data/navigation.yml](/mnt/c/Users/CHUANCHAO/Documents/GitHub/gaochuanchao.github.io/_data/navigation.yml)

Current structure is like:

```yml
main:
  - title: "Home"
    url: "/"

  - title: "Research"
    url: "/research/"

  - title: "Publications"
    url: "/publications/"

  - title: "Projects"
    url: "/projects/"

  - title: "Software"
    url: "/software/"
```

To change the order, just reorder these blocks.

To add a new category, create a new page in `_pages/`, for example:

```md
---
permalink: /teaching/
title: "Teaching"
excerpt: "Teaching"
author_profile: true
---

# Teaching
```

Then add it to `_data/navigation.yml`:

```yml
  - title: "Teaching"
    url: "/teaching/"
```

One important note: because we added smooth internal navigation, also update:

[assets/js/site-navigation.js](/mnt/c/Users/CHUANCHAO/Documents/GitHub/gaochuanchao.github.io/assets/js/site-navigation.js)

Find this line:

```js
return ["/", "/research/", "/publications/", "/projects/", "/software/"].indexOf(normalizePath(url)) !== -1;
```

Add your new URL:

```js
return ["/", "/research/", "/publications/", "/projects/", "/software/", "/teaching/"].indexOf(normalizePath(url)) !== -1;
```

So the full workflow is:

1. Create `_pages/new-page.md`.
2. Add its `permalink`.
3. Add it to `_data/navigation.yml`.
4. Add the URL to `assets/js/site-navigation.js`.
5. If editing `_config.yml`, restart local Jekyll.
