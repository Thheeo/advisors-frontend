export default function Notifications() {
  return <>
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">Notificaciones</h1>
    </div>
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          No tienes notificaciones.
        </h3>
        <p className="text-sm text-muted-foreground">
          Aquí recibirás las notificaciones generadas por el sistema y el administrador.
        </p>
      </div>
    </div>
  </>
}