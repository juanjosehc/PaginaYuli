const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    e.target.reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contáctanos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          {/* Información de Contacto */}
          <div className="space-y-6 text-gray-700">
             <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nuestra Información</h2>
            <div>
              <h3 className="text-lg font-medium text-gray-900">📍 Dirección</h3>
              <p className="mt-1">Calle Falsa 123, Sprinfield, Colombia</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">📞 Teléfono</h3>
              <p className="mt-1">(+57) 300 123 4567</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">✉️ Correo Electrónico</h3>
              <p className="mt-1">contacto@tiendadepanes.com</p>
            </div>
             <div>
              <h3 className="text-lg font-medium text-gray-900">🕒 Horario</h3>
              <p className="mt-1">Lunes a Sábado: 7:00 AM - 8:00 PM</p>
              <p className="mt-1">Domingos y Festivos: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;