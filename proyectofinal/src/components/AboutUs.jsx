const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Acerca de Nosotros
        </h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Bienvenidos a la <strong>Tienda De Panes</strong>, su panadería de confianza desde que abrimos nuestras puertas. Nacimos de la pasión por el pan artesanal, utilizando recetas tradicionales que han pasado de generación en generación.
          </p>
          <p>
            Nuestra misión es ofrecer productos de la más alta calidad, horneados diariamente con los mejores ingredientes locales. Creemos en el poder de un buen pan para unir a las familias y crear momentos memorables.
          </p>
          <p>
            En nuestra tienda, encontrará una deliciosa variedad de panes, desde el clásico Pan de Bono y Buñuelos hasta Croissants hojaldrados y Mantecada suave. Cada producto es una muestra de nuestro compromiso con la excelencia y el sabor auténtico.
          </p>
          <p className="text-center font-semibold text-blue-600 pt-4">
            ¡Gracias por ser parte de nuestra historia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;