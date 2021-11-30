const BASE_URL = 'http://demo6397600.mockable.io/';

export const getParticlesInfo = async() =>{
    const res = await fetch(`${BASE_URL}/particles-info`,    
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json, text/plain, */*',
            },
        }
    );
    const result = await res.json();
    
    return result;
}