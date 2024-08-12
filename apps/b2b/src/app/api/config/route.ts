export async function GET() {
    try {
      const { appConfig } = await import('src/app-config')
      return Response.json(appConfig, { status: 200 });
    } catch (e) {
      return Response.json({ error: e.message }, { status: 500 });
    }
  }
  