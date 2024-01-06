'use server';

import mail from '@sendgrid/mail';
import { RSVPData } from '../components/RSVP';

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function rsvp(data: RSVPData) {
    const { guests, email, message } = data;

    const attendees = Object.entries(guests)
        .map(([name, attending]) => {
            return `
                <tr>
                    <td style="padding-right: 12px;">${name}</td>
                    <td>${attending ? 'Yes' : 'No'}</td>
                </tr>
        `;
        })
        .join('');

    await mail.send({
        to: 'joelkerfoot@gmail.com',
        cc: 'leia.hoot@outlook.com',
        from: 'joel.kerfoot@outlook.com',
        subject: `Wedding RSVP`,
        html: `
            <div style="width: 100%;">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Attending</th>
                    </tr>
                    ${attendees}
                </table>
            </div>
            <div style="width: 100%;">
                <p>email: ${email}</p>

                <p>message: ${message}</p>
            </div>
            `,
    });
}
