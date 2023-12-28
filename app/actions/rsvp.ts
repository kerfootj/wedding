'use server';

import mail from '@sendgrid/mail';
import { RSVPResponse } from '../components/RSVP';

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function rsvp(data: RSVPResponse) {
    await mail.send({
        to: 'joelkerfoot@gmail.com',
        cc: 'leia.hoot@outlook.com',
        from: 'joel.kerfoot@outlook.com',
        subject: `RSVP from ${data.name}`,
        html: `
                <table>
                    <tr>
                        <td>Name</td>
                        <td>${data.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>${data.email}</td>
                    </tr>
                    <tr>
                        <td style="padding-right: 12px">Attending</td>
                        <td>${data.attending ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Guests</td>
                        <td>${data.guests}</td>
                    </tr>
                    <tr>
                        <td>Message</td>
                        <td>${data.message}</td>
                    </tr>
                </table>
            `,
    });
}
