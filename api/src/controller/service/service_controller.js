import {server_service} from '../../request'

const build_service_controller = function() {
    return ({
        get_dhtservers,
        get_liteservers
    })
    async function get_liteservers({params}) {
        return {status:200,result:{liteservers:await server_service.get_liteservers()}}
    }
    async function get_dhtservers({params}) {
        return {status:200,result:{dhtservers:await server_service.get_dhtservers()}}
    }
}

export {
    build_service_controller
}