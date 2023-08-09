import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { username } from './stores';
// Database
export const db = GUN();

// Gun User
export const user = db.user().recall({sessionStorage: true});

user.get('alias').on((v: string) => username.set(v))

db.on('auth', async(event) => {
    const alias = await user.get('alias'); // username string
    username.set(alias);

    console.log(`signed in as ${alias}`);
});