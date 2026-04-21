/**
 * Contact form API route
 * Handles form submissions (logs to console, no database needed)
 */

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.service) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the form data (in production, send to email service)
    console.log('📧 New contact form submission:', {
      timestamp: new Date().toISOString(),
      ...body,
    })

    // TODO: Integrate with email service (e.g., SendGrid, Mailgun, Nodemailer)
    // Example:
    // await sendEmail({
    //   to: 'rahavimakeover@gmail.com',
    //   subject: `New booking inquiry from ${body.name}`,
    //   html: `<p>Name: ${body.name}</p><p>Email: ${body.email}</p>...`
    // })

    return Response.json(
      {
        success: true,
        message: 'Thank you for reaching out! I will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
