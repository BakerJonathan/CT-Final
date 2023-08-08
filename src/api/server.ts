
export const server_calls = {
    get: async (user:string) => { 
        const response = await fetch(`https://pinanimal.onrender.com/api/myimg/getbyuserid/${user}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

    create: async (data:any={},user:string) => { 
        const response = await fetch(`https://pinanimal.onrender.com/api/myimg/new/${user}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }
        return await response.json()
    },

    update: async (entry_id:string, data: any = {}) => { 
        const response = await fetch(`https://pinanimal.onrender.com/api/myimg/update/${entry_id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to update data from the server')
        }
        return
    },

    delete: async (entry_id:string) => { 
        const response = await fetch(`https://pinanimal.onrender.com/api/myimg/${entry_id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });
        if (!response.ok){
            throw new Error('Failed to delete data from the server')
        }
        return
    },
}
