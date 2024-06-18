import {useContext, useCallback, useEffect, memo, useRef} from 'react'
import useParseQuery from '../../hooks/useParseQuery'
import useRedirect from '../../hooks/useRedirect'
import {useStateSelector, useUpdate} from '../../contexts/Store'
import {allowedModes} from '../../rules'
import gC from '../../functions/generationUtils/getClasses'
import classes from './QueryField.module.css'
import {useState} from 'react'
import {SettingsContext} from "../../contexts/Settings.jsx";
import autosize from "autosize";


function QueryField() {
    // settings
    const settings = useContext(SettingsContext)

    const inputFontSize = settings.query.field.fontSize
    const [enableCarret, setEnableCarret] = useState(false)

    const inputRef = useRef(null)

    /* store */
    const mode = useStateSelector(store => store.mode)
    const query = useStateSelector(store => store.query)
    const updateStore = useUpdate()
    // ---

    // parse query
    const [parsedQuery] = useParseQuery(query, undefined, query)

    const redirect = useRedirect()

    const handleRedirect = useCallback(() => {
        redirect(parsedQuery.url, 'main')
    }, [parsedQuery, redirect])

    const handleQueryChange = useCallback(value => {
        if (allowedModes.get('QueryField').has(mode)) {
            //!
            const newValue = value.replace(/\s{2,}/g, ' ')

            if (newValue !== query) {
                updateStore({
                    query: newValue,
                    selectedSuggestion: null
                })
            }
        }
    }, [mode, query, updateStore])

    const onKeyUp = useCallback((e) => {
        setEnableCarret(
            inputRef.current.value.length !== inputRef.current.selectionStart ||
            inputRef.current.selectionDirection !== 'none'
        )

        e.preventDefault()
    }, [inputRef])

    const onKeyDown = useCallback((e) => {
        switch (e.key) {
            case 'Enter':
                if (allowedModes.get('QueryField').has(mode)) {
                    // redirecting
                    handleRedirect()
                    // preventing typing enter in the field
                    e.preventDefault()
                }
                break
            case 'Escape':
                // clearing the query
                updateStore({query: ''})
                break
            case 'ArrowUp':
            case 'ArrowDown':
                e.preventDefault()
                break;
        }
    }, [mode, updateStore, handleRedirect])
    // onKeyDown listener
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])

    useEffect(() => {
        window.addEventListener('keyup', onKeyUp)
        return () => window.removeEventListener('keyup', onKeyUp)
    }, [onKeyUp]);

    useEffect(() => {
        autosize(inputRef.current)
    })

    // focus grabber
    useEffect(() => {
        const grabFocus = () => {
            if (document.activeElement !== inputRef.current)
                inputRef.current.focus()
        }

        document.addEventListener('click', grabFocus)
        return () => document.removeEventListener('click', grabFocus)
    }, [])

    // re-focusing the input inputField to focus on the caret
    useEffect(() => {
        inputRef.current.blur()
        inputRef.current.focus()
    }, [])

    // css variables
    const variables = {
        '--font-size': inputFontSize + 'em',
    }

    const input = <input
        autoFocus
        ref={inputRef}
        value={parsedQuery.value}
        className={gC(classes['field'])}
        onChange={e => handleQueryChange(e.target.value)}
        style={{
            // hide when query is empty
            opacity: parsedQuery.value ? 1 : 0,
            caretColor: enableCarret ? undefined : 'transparent'
        }}/>

    return (
        <div
            className={classes['container']}
            style={variables}>
            {input}
        </div>
    )
}

export default memo(QueryField)