// ==================================================================== \\
// ========= DON'T EDIT THIS FILE UNLESS YOU KNOW WHAT YOU DO ========= \\
// =========      IT SHOULD BE GENERATED FROM TYPESCRIPT      ========= \\
// ==================================================================== \\
/**
 * LISTENER called when modify the message
 * @returns Components will display to receiver
 */
function p(text: string): string {
    return apply(e.sender, text);
}

function onChat(): Component {
    require("config");
    let result: Component[] = [];

    global.forEach((v, i, a) => {
        if(v == ""){
            return;
        }
        let f = format[v];
        if (f.enable !== undefined
            && !f.enable) {
            return;
        }
        result.push(compileFormat(f));
    });

    return components(result);
}

function compileFormat(f: any): Component {
    let s: Style = style();
    if (f.hover !== undefined) {
        if (f.hover.enable === undefined || f.hover.enable) {
            s.hoverEvent(compileHover(f.hover));
        }
    }
    if (f.click !== undefined) {
        if (f.click.enable === undefined || f.click.enable) {
            s.clickEvent(compileClick(f.click));
        }
    }
    return text(f.content, s);
}
function compileHover(h: {
    type: "text" | "item" | "entity", content: any
}): HoverEvent {
    switch (h.type) {
        case "text":
            return HoverEvent.showText(text(h.content));
        default:
            throw "Not support hover type" + h.type;
    }
}
function compileClick(c: {
    type: "suggest" | "change" | "copy" | "open" | "run", content: any
}): ClickEvent {
    switch (c.type) {
        case "suggest":
            return ClickEvent.suggestCommand(c.content);
        case "change":
            return ClickEvent.changePage(c.content);
        case "copy":
            return ClickEvent.copyToClipboard(c.content);
        case "open":
            return ClickEvent.openUrl(c.content);
        case "run":
            return ClickEvent.runCommand(c.content);
        default:
            throw "Not support click type" + c.type;
    }
}