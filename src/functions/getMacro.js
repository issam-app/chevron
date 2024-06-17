function isSubstringNonSubsequent(needle, haystack) {
    let j = 0;

    for (let i = 0; i < haystack.length; i++) {
        if (needle[j] === haystack[i]) {
            j++;
        }
    }

    return j === needle.length;
}

function splitQuery(query) {
    let notAlpha = 0;

    for (let i = 0; i < query.length; i++) {
        if (query[i].toLowerCase() === query[i].toUpperCase()) {
            notAlpha = i;
            break;
        }
    }

    if (notAlpha) {
        return [query.slice(0, notAlpha), query.slice(notAlpha)];
    } else {
        return [query, null];
    }
}

function getMacro(query, normalisedURL = null) {

    let [queryTxt, commandTxt] = splitQuery(query);

    // searching for a macro by url
    if (!normalisedURL && queryTxt.length > 1) {
        // searching for a macro by triggers
        for (const macro of window.CONFIG.macros) {
            // iterating through triggers
            if (isSubstringNonSubsequent(queryTxt.toLowerCase(), macro.name.toLowerCase())) {
                if (commandTxt) {
                    const command = getCommand(commandTxt);
                    if (typeof macro.commands === 'object' && command) {
                        // if the command is defined in the macro
                        if (Object.prototype.hasOwnProperty.call(macro.commands, command.type))
                            return {options: macro, command}
                    }
                } else {
                    return {options: macro, command: null}
                }
            }
        }
    }

    // macro wasn't found
    return null
}

function getCommand(query) {
    let foundCommand = null

    // sorting commands to don't skip a command which starts the same as an another command
    const sortedCommands = window.CONFIG.commands.sort((a, b) => a.trigger.length > b.trigger.length)
    for (const command of sortedCommands)
        // if it's a command
        if (query.startsWith(command.trigger))
            foundCommand = {
                ...command,
                // the rest is arguments
                args: query.slice(command.trigger.length)
            }

    return foundCommand
}

export default getMacro