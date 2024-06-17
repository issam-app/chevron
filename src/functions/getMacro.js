function isAlpha(c) {
    return /^([A-Z a-z])$/i.test(c);
}

function matchScore(query, maccro) {
    let j = 0;
    let score = 1;

    for (let i = 0; i < maccro.length && j < query.length; i++) {
        if (query[j] === maccro[i]) {
            if (j === 0 && i !== 0) {
                score += 10
            }
            j++
        } else {
            score += 5
        }
    }

    return j === query.length ? score : 0;
}

function splitQuery(query) {
    let notAlpha = 0;

    for (let i = 0; i < query.length; i++) {
        if (!isAlpha(query[i])) {
            notAlpha = i;
            break;
        }
    }

    if (notAlpha) {
        return [query.slice(0, notAlpha).toLowerCase(), query.slice(notAlpha)];
    } else {
        return [query.toLowerCase(), null];
    }
}

function getMacro(query, normalisedURL = null) {

    if (normalisedURL) return null

    let [queryTxt, commandTxt] = splitQuery(query);
    let bestMatch = null;
    let bestScore = 0;

    for (const macro of window.CONFIG.macros) {
        let score = matchScore(queryTxt, macro.name.toLowerCase())

        if (score && (score < bestScore || !bestScore)) {
            bestMatch = macro;
            bestScore = score;
        }
    }

    if (bestMatch) {
        if (commandTxt) {
                    const command = getCommand(commandTxt);
                    if (typeof bestMatch.commands === 'object' && command) {
                        // if the command is defined in the macro
                        if (Object.prototype.hasOwnProperty.call(bestMatch.commands, command.type))
                            return {options: bestMatch, command}
                    }
                } else {
                    return {options: bestMatch, command: null}
                }
    } else {
        return null
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