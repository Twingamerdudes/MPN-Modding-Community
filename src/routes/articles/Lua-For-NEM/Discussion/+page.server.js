import {Deta} from 'deta';
const deta = Deta("b0adhd7hmhh_fbpc1Xn4DyyPDDpPmEaKJC2KuVMW8E7Z");

const db = deta.Base('Forums');

export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const message = formData.get("message");
        if(message === "") return null;
        const currentMessages = await db.get("Lua-For-NEM");
        if(currentMessages === null) {
            await db.put({
                messages: [
                    {
                        message: message,
                        user: "Anonymous User"
                    }
                ],
                key: "Lua-For-NEM"
            })
        }
        else{
            await db.update({
                messages: [
                    ...currentMessages.messages,
                    {
                        message: message,
                        user: "Anonymous User"
                    }
                ]
            }, "Lua-For-NEM")
        }

    }
}
export async function load({ params }) {
    const messages = await db.get("Lua-For-NEM")
    return {
        messages
    };
}