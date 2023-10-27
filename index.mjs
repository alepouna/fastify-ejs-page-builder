/**
 * Creates metadata to be used in the ejs templates
 * @constructor
 */
export class PageBuilder {

    constructor(pathToPageBuilder) {

        this.builderPath = pathToPageBuilder || './src/web/views/builder.ejs';

        this.page = {
            title: '', //Browser tab title
            description: '', //Meta tag description
            path: '', //Path to the ejs page
            nav: false, //Show nav bar
            theme: '' //Page theme
        }   

    }

    /**
     * 
     * @returns {string} Returns the path to the builder.ejs file
     */
    getBuilderPath() {

        return this.builderPath;

    }

    /**
     * 
     * @param {string} Page Title (browser tab)
     */
    setPageTitle(title) {

        if (!title) throw new Error('Page title cannot be empty');

        this.page.title = title;

    }

    /**
     * 
     * @param {string} Page description (meta tag)
     */
    setPageDescription(description) {

        if (!description) throw new Error('Page description cannot be empty');

        this.page.description = description;

    }

    /**
     * 
     * @param {string} Path to the ejs page 
     */
    setPagePath(path) {

        if (!path) throw new Error('Page path cannot be empty');
        //If page includes .ejs, remove it
        if (path.includes('.ejs')) path = path.replace('.ejs', '');

        this.page.path = path + '.ejs';

    }

    /**
     *
     * @param {boolean} Show nav bar
     */
    setPageNav(nav) {

        if (!nav) throw new Error('Page nav cannot be empty');

        this.page.nav = nav;

    }

    /**
     * 
     * @param {string} Set the page theme 
     */
    setTheme(theme) {

        if (!theme) throw new Error('Page theme cannot be empty');

        this.page.theme = theme;

    }

    /**
     * 
     * @param {string} Object key 
     * @param {*} Object Value  
     */
    setCustomObject(key, value) {

        this.page[key] = value;

    }

    /**
     * 
     * @returns {object} Returns the page object
     */
    getPage() {

        return this.page;

    }

}