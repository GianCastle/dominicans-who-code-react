import { useState, useEffect } from 'react'
import { updateImageUrl, updateLinks } from './HooksHelpers'

import { getDominicanCodersJson } from '../services/github/GetDominicanCodersJson'

import { shuffle } from '../utils/GlobalUtils'

export const useDominicanCoders = (criteria = '') => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const setCoders = coders => setData(coders)

    useEffect(() => {
        setLoading(true)
        getDominicanCodersJson()
            .then(updateImageUrl)
            .then(updateLinks)
            .then(shuffle)
            .then(setCoders)
            .finally(setLoading(false))

    }, [criteria])

    return { data, loading }
}

