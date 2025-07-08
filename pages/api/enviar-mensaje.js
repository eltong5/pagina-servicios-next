export default async function handler (req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({'Mensaje': 'Método no permitido'});
    }
    const { nombre, email, mensaje } =req.body;
    try {
        const response = await fetch('https://primary-production-98ab7.up.railway.app/webhook/contacto',{
                method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                     },
                 body: JSON.stringify({ nombre, email, mensaje }),
                 });
                    if(!response.ok){
                        const errorData = await response.json();
                        return res.status(500).json({ 'mensaje': 'Error al reenviar datos a n8n', details: errorData});
                         }
                         return res.status(200).json({message: 'Mensaje enviado con exito a n8n'});
                        } catch (error){
                         return res.status(500).json({error:'Error de red al conectar con n8n',details: error.message});
                     }
    }





