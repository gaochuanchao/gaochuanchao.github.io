(function () {
  if (!window.fetch || !window.history || !window.DOMParser) {
    return;
  }

  var main = document.getElementById("main");
  var page = document.querySelector("#main article.page");
  if (!main || !page) {
    return;
  }

  function normalizePath(url) {
    var path = url.pathname;
    if (path.length > 1 && path.slice(-1) !== "/") {
      path += "/";
    }
    return path;
  }

  function isPageNavigation(link) {
    if (!link || link.target && link.target !== "_self") {
      return false;
    }

    var url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) {
      return false;
    }

    if (url.hash || url.search) {
      return false;
    }

    return ["/", "/research/", "/projects/", "/publications/", "/service/", "/software/"].indexOf(normalizePath(url)) !== -1;
  }

  function replacePage(html, url, shouldPush) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    var nextPage = doc.querySelector("#main article.page");

    if (!nextPage) {
      window.location.href = url.href;
      return;
    }

    page.innerHTML = nextPage.innerHTML;
    document.title = doc.title;

    if (shouldPush) {
      window.history.pushState({ path: url.href }, "", url.href);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  function loadPage(url, shouldPush) {
    main.classList.add("is-loading");

    fetch(url.href, {
      credentials: "same-origin",
      headers: { "X-Requested-With": "XMLHttpRequest" }
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Navigation failed");
        }
        return response.text();
      })
      .then(function (html) {
        replacePage(html, url, shouldPush);
      })
      .catch(function () {
        window.location.href = url.href;
      })
      .finally(function () {
        main.classList.remove("is-loading");
      });
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a");

    if (!isPageNavigation(link)) {
      return;
    }

    var url = new URL(link.href, window.location.href);
    var currentPath = normalizePath(window.location);
    var nextPath = normalizePath(url);

    event.preventDefault();

    if (currentPath === nextPath) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    loadPage(url, true);
  });

  window.addEventListener("popstate", function () {
    loadPage(new URL(window.location.href), false);
  });
})();
