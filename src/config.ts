"If you have any problem with it, feel free to submit issue";
// ======================================================== \\
const global:string[] = [
    isBungee() ? "server" : "prefix",
    " ",
    e.sender.hasPermission("sodionchat.isop") ? "admin" : "",
    e.sender.hasPermission("sodionchat.isop") ? " " : "",
    "name",
    " ",
    "message"];
const format:any = {
    prefix: {
        content: "[~]",
    },
    server: {
        content: "[" + e.sender.getLocation() + "]",
        hover: {
            type: "text",
            content: p("This message comes from another server\n" +
                "\n" +
                "Click here connect to "+e.sender.getLocation()),
        },
        click: {
            // possible values: suggest openurl copy run
            type: "run",
            content: "/server "+e.sender.getLocation()+" ",
        },
    },
    admin: {
        content: "§#ff0000[OP]",
        hover: {
            type: "text",
            content: p("If you have any problems about this server\n" +
                "ask me for help."),
        },
    },
    name: {
        content: "§b<"+e.sender.getDisplayName()+">",
        hover: {
            type: "text",
            content: p("Send message to %player_displayname%\n" +
                "\n" +
                "Click here"),
            enable: !isBungee(),
        },
        click: {
            // possible values: suggest openurl copy run
            type: "suggest",
            content: "/tell "+e.sender.getDisplayName()+" ",
            enable: !isBungee(),
        },
    },
    message: {
        content: e.message,
    },
    " ": {
        content: " ",
    }
};