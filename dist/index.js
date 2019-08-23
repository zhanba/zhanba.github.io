"use strict";
class ProjectLink extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementsByTagName('template')[0].content;
        const title = this.getAttribute("title");
        const url = this.getAttribute("url");
        const repo = this.getAttribute("repo");
        this.attachShadow({ mode: "open" }).appendChild(template.cloneNode(true));
        const links = this.shadowRoot.querySelectorAll('.link');
        links[0].textContent = title;
        links[0].href = url || '';
        links[1].href = repo || '';
    }
}
customElements.define("project-link", ProjectLink);
