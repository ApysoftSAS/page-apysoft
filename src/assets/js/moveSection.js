export function scrollToSection(sectionId) {
    var targetElement = document.getElementById(sectionId);

    if (targetElement) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Desplazamiento suave hacia la sección
        targetElement.scrollIntoView({
            behavior: 'smooth',
        });
    }
}