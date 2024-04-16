import { useState, useEffect, Children } from 'react'
import { EVENTS } from '../../const.js' 
import { match } from 'path-to-regexp'


// eslint-disable-next-line react/prop-types
export function Router ({children, routes = [], defaultComponent: DefaultComponent = () => <h1>404: Not Found</h1>}){
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(()=>{
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)
        
        return () =>{
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    },[])

    let routeParams = {}

    const routesFromChildren = Children.map(children, ({ props, type }) => {

        const { name } = type
        const isRoute = name === 'Route'
        return isRoute ? props : null
        // de props salen el path y el Component
    })

    const routesToUse = routes.concat(routesFromChildren)

    const Page = routesToUse.find(({path}) => {
        if (path === currentPath) return true

        //se utiliza path-reg-exp
        //para detectar rutas dinamicas como /seacrch/:query 
        // :query es una ruta dinamica
        const matcherUrl = match(path, {decode: decodeURIComponent})
        const matched = matcherUrl(currentPath)
        if(!matched) return false

        //Guarda los parametros de la url que sean dinamicos extraidos con path-to-regex
        //Ej --> ruta: /search/:query
        //Y la url: /search/javascript => matched.params.query === 'javascript'
        routeParams = matched.params
        return true // {query: 'javascript'} // /search/javascript
    
    })?.Component

    return Page 
        ? <Page routeParams={routeParams}/> 
        : <DefaultComponent routeParams={routeParams} />
}