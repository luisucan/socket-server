import { Socket } from "socket.io";
import SocketIO from 'socket.io'

export const desconectar = ( cliente: Socket)=>{
    cliente.on('disconnect',()=>{
        console.log("clinete desconectado");
    })
}

export const mensaje = ( cliente: Socket, io: SocketIO.Server) =>{
    cliente.on('mensaje',(payload:{de:string, cuerpo:string})=>{
        console.log("mensaje recivido ",payload);
        io.emit('mensaje-nuevo', payload );
    });
}