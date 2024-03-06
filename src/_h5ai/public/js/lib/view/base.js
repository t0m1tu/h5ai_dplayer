const {dom} = require('../util');

// const SEL_ROOT = 'body';
// const TPL_TOPBAR =
const rootSelector = 'body';
const topbarTpl =
        `<div id="topbar">
            <div id="toolbar"></div>
            <div id="flowbar"></div>
            <a id="backlink" href="https://larsjung.de/h5ai/" title="powered by h5ai - https://larsjung.de/h5ai/">
                <div>powered</div>
                <div>by h5ai</div>
            </a>
        </div>`;
// const TPL_MAINROW =
const mainrowTpl =
        `<div id="mainrow">
            <div id="content"></div>
        </div>`;

const init = () => {
    // const $root = dom(SEL_ROOT)
    const $root = dom(rootSelector)
        .attr('id', 'root')
        .clr()
        // .app(TPL_TOPBAR)
        .app(topbarTpl)
        // .app(TPL_MAINROW);
        .app(mainrowTpl);

    return {
        $root,
        $topbar: $root.find('#topbar'),
        $toolbar: $root.find('#toolbar'),
        $flowbar: $root.find('#flowbar'),
        $mainrow: $root.find('#mainrow'),
        $content: $root.find('#content')
    };
};

module.exports = init();
