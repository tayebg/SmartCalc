// Enhanced Settings - Version améliorée avec toutes les fonctionnalités

// Variables globales
const body = document.body;
let isSettingsOpen = false;

// Initialisation des paramètres
document.addEventListener('DOMContentLoaded', function() {
  initializeSettings();
  loadUserPreferences();
});

// Initialisation des paramètres
function initializeSettings() {
  // Toggle du panneau des paramètres
  const settingsToggle = document.getElementById('settings-toggle');
  if (settingsToggle) {
    settingsToggle.addEventListener('click', toggleSettingsPanel);
  }
  
  // Toggle du mode sombre
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', toggleDarkMode);
  }
  
  // Bouton de réinitialisation
  const resetButton = document.getElementById('reset-all-button');
  if (resetButton) {
    resetButton.addEventListener('click', resetAllData);
  }
  
  // Bouton d'export PDF
  const exportPdfButton = document.getElementById('export-pdf-button');
  if (exportPdfButton) {
    exportPdfButton.addEventListener('click', exportToPDF);
  }
  
  // Fermeture du panneau avec overlay
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSettingsPanel);
  }
    // Bouton de fermeture du sidebar
  const sidebarClose = document.querySelector('.sidebar-close');
  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSettingsPanel);
  }
  
  // Bouton FAB scroll-to-top
  initializeScrollToTop();
  
  // Fermeture avec Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && isSettingsOpen) {
      closeSettingsPanel();
    }
  });
}

// Toggle du panneau des paramètres
function toggleSettingsPanel() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  
  if (sidebar && overlay) {
    const isActive = sidebar.classList.contains('active');
    
    if (isActive) {
      closeSettingsPanel();
    } else {
      openSettingsPanel();
    }
  }
}

// Ouverture du panneau des paramètres
function openSettingsPanel() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  
  if (sidebar && overlay) {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    isSettingsOpen = true;
    
    // Animation d'entrée
    sidebar.style.transform = 'translateX(0)';
    
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
  }
}

// Fermeture du panneau des paramètres
function closeSettingsPanel() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  
  if (sidebar && overlay) {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    isSettingsOpen = false;
    
    // Restaurer le scroll du body
    document.body.style.overflow = '';
  }
}

// Toggle du mode sombre
function toggleDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const isDark = darkModeToggle ? darkModeToggle.checked : false;
  
  if (isDark) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    NotificationManager.show("Mode sombre activé", "info", 2000);
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    NotificationManager.show("Mode clair activé", "info", 2000);
  }
  
  // Animation de transition
  body.style.transition = 'all 0.3s ease';
  setTimeout(() => {
    body.style.transition = '';
  }, 300);
}

// Réinitialisation de toutes les données
function resetAllData() {
  // Demander confirmation
  const confirmed = confirm('Êtes-vous sûr de vouloir réinitialiser toutes les données ? Cette action est irréversible.');
  
  if (confirmed) {
    try {
      // Effacer le localStorage
      localStorage.removeItem('calculatorData');
      localStorage.removeItem('userGrades');
      localStorage.removeItem('userPreferences');
      localStorage.removeItem('grades');
      
      // Réinitialiser les variables globales
      if (typeof window.selectedCycle !== 'undefined') window.selectedCycle = null;
      if (typeof window.selectedSpecialty !== 'undefined') window.selectedSpecialty = null;
      if (typeof window.selectedSemesters !== 'undefined') window.selectedSemesters = [];
      if (typeof window.semesterDataMap !== 'undefined') window.semesterDataMap = {};
      if (typeof window.savedGrades !== 'undefined') window.savedGrades = {};
      if (typeof window.history !== 'undefined') window.history = [];
      
      // Effacer tous les inputs
      const inputs = document.querySelectorAll('input[type="number"]');
      inputs.forEach(input => {
        input.value = '';
        input.classList.remove('input-valid', 'input-invalid');
      });

      // Réinitialiser les moyennes affichées
      const averageCells = document.querySelectorAll('.module-average, .ue-average, [id^="avg-"], [id^="ueavg-"]');
      averageCells.forEach(cell => {
        cell.textContent = '–';
        cell.style.color = ''; // Réinitialiser la couleur
        cell.classList.remove('success-animation', 'error-animation', 'text-success', 'text-danger');
      });

      // Réinitialiser les crédits affichés
      const creditCells = document.querySelectorAll('.module-credits, .ue-credits, [id^="credit-"]');
      creditCells.forEach(cell => {
        cell.textContent = '–';
        cell.style.color = ''; // Réinitialiser la couleur
        cell.classList.remove('success-animation', 'error-animation', 'text-success', 'text-danger');
      });

      // Réinitialiser les résultats
      const resultElements = [
        'current-semester-avg',
        'current-semester-credits', 
        'annual-average',
        'annual-credits',
        'annual-status'
      ];
      
      resultElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.textContent = '–';
          element.style.color = '';
          element.className = element.className.replace(/success|danger|text-success|text-danger/g, '');
        }
      });

      // Vider les sections de résultats
      const semesterResults = document.getElementById('semester-results');
      if (semesterResults) semesterResults.innerHTML = '';
      
      // Vider les champs de l'autre semestre
      const otherSemesterAvgInput = document.getElementById('other-semester-avg');
      if (otherSemesterAvgInput) otherSemesterAvgInput.value = '';
      const otherSemesterCrInput = document.getElementById('other-semester-cr');
      if (otherSemesterCrInput) otherSemesterCrInput.value = '';

      NotificationManager.show("Toutes les données ont été réinitialisées", "success", 3000);
      closeSettingsPanel();
      
    } catch (error) {
      console.error('Erreur lors de la réinitialisation:', error);
      NotificationManager.show("Erreur lors de la réinitialisation", "error", 3000);
    }
  }
}



// Export en PDF
function exportToPDF() {
  try {
    // Vérifier s'il y a des notes saisies de manière plus robuste
    let hasGrades = false;
    
    // Vérifier dans les inputs de notes
    const gradeInputs = document.querySelectorAll('input.grade-input[type="number"]');
    gradeInputs.forEach(input => {
      if (input.value !== "" && !isNaN(parseFloat(input.value))) {
        hasGrades = true;
      }
    });
    
    // Vérifier aussi dans les moyennes calculées
    if (!hasGrades) {
      const averageCells = document.querySelectorAll('.module-average');
      averageCells.forEach(cell => {
        if (cell.textContent !== '–' && cell.textContent !== '' && !isNaN(parseFloat(cell.textContent))) {
          hasGrades = true;
        }
      });
    }
    
    // Vérifier dans savedGrades si disponible
    if (!hasGrades && typeof window.savedGrades !== 'undefined') {
      for (const specialty in window.savedGrades) {
        for (const cycle in window.savedGrades[specialty]) {
          for (const sem in window.savedGrades[specialty][cycle]) {
            for (const module in window.savedGrades[specialty][cycle][sem]) {
              if (Object.keys(window.savedGrades[specialty][cycle][sem][module]).length > 0) {
                hasGrades = true;
                break;
              }
            }
            if (hasGrades) break;
          }
          if (hasGrades) break;
        }
        if (hasGrades) break;
      }
    }

    if (!hasGrades) {
      NotificationManager.show("Veuillez saisir des notes avant d'exporter en PDF.", "warning", 3000);
      return;
    }

    NotificationManager.show("Préparation de l'export PDF...", "info", 2000);

    // Créer le contenu à exporter
    const exportContent = generatePDFContent();

    // Créer une nouvelle fenêtre pour l'impression
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      NotificationManager.show("Impossible d'ouvrir la fenêtre d'impression. Vérifiez les paramètres de votre navigateur.", "error", 3000);
      return;
    }

    printWindow.document.write(exportContent);
    printWindow.document.close();

    // Attendre que le contenu soit chargé puis imprimer
    printWindow.onload = function() {
      setTimeout(() => {
        try {
          printWindow.print();
          NotificationManager.show("Export PDF généré avec succès", "success", 3000);
        } catch (printError) {
          console.error("Erreur lors de l'impression:", printError);
          NotificationManager.show("Erreur lors de l'impression PDF", "error", 3000);
        }
      }, 500);
    };

    // Gérer les erreurs de la fenêtre d'impression
    printWindow.onerror = function(error) {
      console.error("Erreur dans la fenêtre d'impression:", error);
      NotificationManager.show("Erreur lors de la génération du PDF", "error", 3000);
    };

    closeSettingsPanel();

  } catch (error) {
    console.error("Erreur lors de l'export PDF:", error);
    NotificationManager.show("Erreur lors de l'export PDF: " + error.message, "error", 3000);
  }
}

// Génération du contenu PDF
function generatePDFContent() {
  const currentDate = new Date().toLocaleDateString('fr-FR');
  const currentTime = new Date().toLocaleTimeString('fr-FR');
  
  // Récupérer les données actuelles avec fallback depuis localStorage
  let cycleText = 'N/A';
  let specialtyText = 'N/A';
  let semesterText = 'N/A';
  
  try {
    // Essayer d'abord les variables globales
    if (window.selectedCycle) {
      cycleText = window.selectedCycle === 'M1' ? 'Master 1' : 'Master 2';
    } else {
      // Fallback depuis localStorage
      const savedData = localStorage.getItem('calculatorData');
      if (savedData) {
        const data = JSON.parse(savedData);
        if (data.selectedCycle) {
          cycleText = data.selectedCycle === 'M1' ? 'Master 1' : 'Master 2';
        }
      }
    }
    
    if (window.selectedSpecialty) {
      specialtyText = getSpecialtyFullName(window.selectedSpecialty);
    } else {
      // Fallback depuis localStorage
      const savedData = localStorage.getItem('calculatorData');
      if (savedData) {
        const data = JSON.parse(savedData);
        if (data.selectedSpecialty) {
          specialtyText = getSpecialtyFullName(data.selectedSpecialty);
        }
      }
    }
    
    if (window.selectedSemesters && window.selectedSemesters.length > 0) {
      // Formater le texte des semestres de manière plus lisible
      if (window.selectedSemesters.length === 1) {
        semesterText = `Semestre ${window.selectedSemesters[0]}`;
      } else {
        semesterText = `Semestres ${window.selectedSemesters.join(' + ')}`;
      }
    } else {
      // Fallback depuis localStorage
      const savedData = localStorage.getItem('calculatorData');
      if (savedData) {
        const data = JSON.parse(savedData);
        if (data.selectedSemesters && data.selectedSemesters.length > 0) {
          if (data.selectedSemesters.length === 1) {
            semesterText = `Semestre ${data.selectedSemesters[0]}`;
          } else {
            semesterText = `Semestres ${data.selectedSemesters.join(' + ')}`;
          }
        }
      }
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
  
  // Détecter si c'est une vue combinée (1+2 ou 3+4)
  const isCombinedView = window.selectedSemesters && window.selectedSemesters.length > 1;
  
  console.log("PDF Generation Debug:", {
    selectedCycle: window.selectedCycle,
    selectedSpecialty: window.selectedSpecialty,
    selectedSemesters: window.selectedSemesters,
    isCombinedView: isCombinedView,
    cycleText: cycleText,
    specialtyText: specialtyText,
    semesterText: semesterText
  });
  
  // Récupérer les tableaux de notes et les résultats
  let tablesHTML = '';
  let firstTableHTML = '';
  let secondTableHTML = '';
  
  // Récupérer tous les tableaux de notes visibles avec toutes les colonnes
  const tables = document.querySelectorAll('.enhanced-table');
  
  if (isCombinedView && tables.length >= 2) {
    // Pour les vues combinées, séparer les tableaux
    tables.forEach((table, index) => {
      if (table.offsetParent !== null) { // Vérifier si le tableau est visible
        // Cloner le tableau pour éviter de modifier l'original
        const tableClone = table.cloneNode(true);
        
        // S'assurer que toutes les colonnes sont visibles dans le PDF
        const allCells = tableClone.querySelectorAll('th, td');
        allCells.forEach(cell => {
          // Supprimer les styles qui pourraient cacher des colonnes
          cell.style.display = '';
          cell.style.visibility = '';
          
          // S'assurer que les inputs sont remplacés par leurs valeurs
          const inputs = cell.querySelectorAll('input');
          inputs.forEach(input => {
            if (input.value) {
              const span = document.createElement('span');
              span.textContent = input.value;
              span.style.fontWeight = 'bold';
              input.parentNode.replaceChild(span, input);
            }
          });
        });
        
        // Ajouter des classes pour le style PDF
        tableClone.classList.add('pdf-table');
        
        if (index === 0) {
          firstTableHTML = tableClone.outerHTML;
        } else if (index === 1) {
          secondTableHTML = tableClone.outerHTML;
        }
      }
    });
  } else {
    // Pour les vues simples, traiter normalement
    tables.forEach(table => {
      if (table.offsetParent !== null) { // Vérifier si le tableau est visible
        // Cloner le tableau pour éviter de modifier l'original
        const tableClone = table.cloneNode(true);
        
        // S'assurer que toutes les colonnes sont visibles dans le PDF
        const allCells = tableClone.querySelectorAll('th, td');
        allCells.forEach(cell => {
          // Supprimer les styles qui pourraient cacher des colonnes
          cell.style.display = '';
          cell.style.visibility = '';
          
          // S'assurer que les inputs sont remplacés par leurs valeurs
          const inputs = cell.querySelectorAll('input');
          inputs.forEach(input => {
            if (input.value) {
              const span = document.createElement('span');
              span.textContent = input.value;
              span.style.fontWeight = 'bold';
              input.parentNode.replaceChild(span, input);
            }
          });
        });
        
        // Ajouter des classes pour le style PDF
        tableClone.classList.add('pdf-table');
        
        tablesHTML += tableClone.outerHTML;
      }
    });
  }
  
  // Si pas de tableaux visibles, récupérer le contenu du container
  if (!tablesHTML && !firstTableHTML && !secondTableHTML) {
    const tableContainer = document.querySelector(".table-container");
    if (tableContainer) {
      const containerClone = tableContainer.cloneNode(true);
      
      // Traiter tous les inputs dans le container
      const inputs = containerClone.querySelectorAll('input');
      inputs.forEach(input => {
        if (input.value) {
          const span = document.createElement('span');
          span.textContent = input.value;
          span.style.fontWeight = 'bold';
          input.parentNode.replaceChild(span, input);
        }
      });
      
      tablesHTML = containerClone.innerHTML;
    }
  }
  
  // Récupérer les résultats
  const resultsSection = document.getElementById("results-section");
  let resultsHTML = '';
  if (resultsSection && resultsSection.offsetParent !== null) {
    resultsHTML = resultsSection.innerHTML;
  }
  
  // Récupérer les moyennes et crédits calculés
  let calculatedResults = '';
  const semesterResults = document.getElementById("semester-results");
  const annualResults = document.getElementById("annual-results");
  
  if (semesterResults) {
    calculatedResults += `<div class="result-card"><h3>Résultats Semestriels</h3>${semesterResults.innerHTML}</div>`;
  }
  
  if (annualResults) {
    calculatedResults += `<div class="result-card"><h3>Résultats Annuels</h3>${annualResults.innerHTML}</div>`;
  }

  // Générer le contenu HTML selon le type de vue
  let contentHTML = '';
  
  if (isCombinedView && (firstTableHTML || secondTableHTML)) {
    // Vue combinée - deux pages
    contentHTML = `
      <!-- Page 1 -->
      <div class="pdf-page">
        <div class="header">
          <img src="logo pdf.png" alt="Faculty Logo" class="faculty-logo">
          <div class="header-content">
            <div class="title">Relevé de Notes Officiel</div>
            <div class="generation-info">Généré le ${currentDate} à ${currentTime}</div>
          </div>
        </div>
        
        <div class="info">
          <div class="info-item">
            <div class="info-label">Cycle</div>
            <div>${cycleText}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Spécialité</div>
            <div>${specialtyText}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Semestre(s)</div>
            <div>${semesterText}</div>
          </div>
        </div>
        
        <div class="content-section">
          <h3 style="text-align: center; color: #667eea; margin-bottom: 15px;">Semestre ${window.selectedSemesters[0]}</h3>
          ${firstTableHTML}
        </div>
      </div>
      
      <!-- Page 2 -->
      <div class="pdf-page">
        <div class="content-section">
          <h3 style="text-align: center; color: #667eea; margin-bottom: 15px;">Semestre ${window.selectedSemesters[1]}</h3>
          ${secondTableHTML}
        </div>
        
        ${calculatedResults ? `<div class="results-section-pdf">${calculatedResults}</div>` : ''}
        ${resultsHTML ? `<div class="results-section-pdf">${resultsHTML}</div>` : ''}
        
        <div class="footer">
          <div class="footer-logo">
            <div class="footer-icon">🎓</div>
            <div class="footer-text">SmartCalc</div>
          </div>
          <p>Créé avec amour ❤️ par <span class="creators">Bekkouche Tayeb et Bakkar Ilyes</span></p>
          <p>Instagram : @t04yeb et @ilyes_bkr_</p>
          <p>Application web de calcul de moyennes selon le système LMD</p>
          <div class="footer-note">
            <small>Ce document a été généré automatiquement par l'application SmartCalc</small>
          </div>
        </div>
      </div>
    `;
  } else {
    // Vue simple - une page
    contentHTML = `
      <div class="header">
        <img src="logo pdf.png" alt="Faculty Logo" class="faculty-logo">
        <div class="header-content">
          <div class="title">Relevé de Notes Officiel</div>
          <div class="generation-info">Généré le ${currentDate} à ${currentTime}</div>
        </div>
      </div>
      
      <div class="info">
        <div class="info-item">
          <div class="info-label">Cycle</div>
          <div>${cycleText}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Spécialité</div>
          <div>${specialtyText}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Semestre(s)</div>
          <div>${semesterText}</div>
        </div>
      </div>
      
      <div class="content-section">
        ${tablesHTML}
      </div>
      
      ${calculatedResults ? `<div class="results-section-pdf">${calculatedResults}</div>` : ''}
      ${resultsHTML ? `<div class="results-section-pdf">${resultsHTML}</div>` : ''}
      
      <div class="footer">
        <div class="footer-logo">
          <div class="footer-icon">🎓</div>
          <div class="footer-text">SmartCalc</div>
        </div>
        <p>Créé avec amour ❤️ par <span class="creators">Bekkouche Tayeb et Bakkar Ilyes</span></p>
        <p>Instagram : @t04yeb et @ilyes_bkr_</p>
        <p>Application web de calcul de moyennes selon le système LMD</p>
        <div class="footer-note">
          <small>Ce document a été généré automatiquement par l'application SmartCalc</small>
        </div>
      </div>
    `;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Relevé de Notes - ${cycleText} ${specialtyText}</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          color: #333;
          line-height: 1.6;
          font-size: ${isCombinedView ? '9pt' : '10pt'};
        }
        @page {
          size: A4;
          margin: 0;
        }
        .pdf-page {
          width: 210mm;
          min-height: 297mm;
          padding: 20px;
          box-sizing: border-box;
          page-break-after: always;
        }
        .pdf-page:last-of-type {
          page-break-after: avoid;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
          padding: 15px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        .faculty-logo {
          max-width: 80px;
          height: auto;
          margin-right: 15px;
          border-radius: 50%;
          border: 3px solid white;
          background: white;
          padding: 5px;
        }
        .header-content {
          flex-grow: 1;
          text-align: center;
        }
        .title {
          font-size: ${isCombinedView ? '18px' : '20px'};
          font-weight: bold;
          color: white;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .generation-info {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.9);
          font-style: italic;
        }
        .info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-bottom: 25px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 20px;
          border-radius: 10px;
          border: 2px solid #667eea;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .info-item {
          text-align: center;
          font-size: ${isCombinedView ? '10pt' : '11pt'};
          padding: 10px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-left: 4px solid #667eea;
        }
        .info-label {
          font-weight: bold;
          color: #667eea;
          font-size: ${isCombinedView ? '9pt' : '10pt'};
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
          display: block;
        }
        .info-item > div:last-child {
          font-size: ${isCombinedView ? '11pt' : '12pt'};
          font-weight: 600;
          color: #2d3748;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: ${isCombinedView ? '20px' : '25px'};
          font-size: ${isCombinedView ? '8pt' : '9pt'};
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        th, td {
          border: 1px solid #e2e8f0;
          padding: ${isCombinedView ? '6px' : '8px'};
          text-align: center;
        }
        th {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: ${isCombinedView ? '7pt' : '8pt'};
        }
        tbody tr:nth-child(even) {
          background-color: #f8f9ff;
        }
        tbody tr:hover {
          background-color: #e6f3ff;
        }
        .ue-row td {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
          color: white !important;
          font-weight: bold;
          text-align: left !important;
          font-size: ${isCombinedView ? '9pt' : '10pt'};
        }
        .ue-average-row {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%) !important;
        }
        .ue-average-row td {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%) !important;
          border-top: 2px solid #667eea !important;
          border-bottom: 2px solid #667eea !important;
          font-weight: bold;
          color: #2d3748 !important;
        }
        .pdf-table th,
        .pdf-table td {
          display: table-cell !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .pdf-table .module-average,
        .pdf-table .module-credits,
        .pdf-table .ue-average {
          font-weight: bold;
          color: #333 !important;
        }
        .pdf-table input,
        .pdf-table .grade-input {
          display: inline !important;
          visibility: visible !important;
          border: none;
          background: transparent;
          text-align: center;
          font-weight: bold;
          color: #333;
        }
        .results-section-pdf {
          margin-top: 25px;
          padding: 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 10px;
          border: 2px solid #667eea;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .result-card {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: ${isCombinedView ? '15px' : '20px'};
          margin-bottom: ${isCombinedView ? '15px' : '20px'};
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .result-card h3 {
          color: #667eea;
          margin-top: 0;
          font-size: ${isCombinedView ? '14px' : '16px'};
          text-align: center;
          margin-bottom: 15px;
          padding-bottom: 8px;
          border-bottom: 2px solid #667eea;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .result-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px dashed #e2e8f0;
          font-size: ${isCombinedView ? '10pt' : '11pt'};
        }
        .result-item:last-child {
          border-bottom: none;
        }
        .result-label {
          font-weight: bold;
          color: #4a5568;
        }
        .result-value {
          color: #2d3748;
          font-weight: 600;
        }
        .highlight .result-value {
          font-weight: bold;
          color: #667eea;
          font-size: ${isCombinedView ? '11pt' : '12pt'};
        }
        .result-status {
          text-align: center;
          margin-top: 15px;
          font-weight: bold;
          font-size: ${isCombinedView ? '11pt' : '12pt'};
          padding: 10px;
          border-radius: 8px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 9pt;
          color: #718096;
          border-top: 2px solid #667eea;
          padding-top: 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 10px;
          padding: 20px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
        .footer-icon {
          font-size: 20px;
          margin-right: 8px;
          color: #667eea;
        }
        .footer-text {
          font-size: 14px;
          font-weight: bold;
          color: #667eea;
        }
        .footer-note {
          margin-top: 15px;
          padding-top: 10px;
          border-top: 1px dashed #cbd5e0;
          font-style: italic;
        }
        .creators {
          color: #667eea;
          font-weight: bold;
        }
        .text-success {
          color: #10b981 !important;
        }
        .text-danger {
          color: #ef4444 !important;
        }
        .text-warning {
          color: #f59e0b !important;
        }
        input {
          border: none;
          background: transparent;
          text-align: center;
          font-weight: bold;
        }
        @media print {
          html, body {
            width: 210mm;
            height: auto;
            margin: 0;
            padding: 0;
            overflow: visible;
          }
          .pdf-page {
            page-break-after: always;
          }
          .pdf-page:last-of-type {
            page-break-after: avoid;
          }
          .pdf-table th,
          .pdf-table td,
          .enhanced-table th,
          .enhanced-table td {
            display: table-cell !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
          input, .grade-input, .module-average, .module-credits, .ue-average {
            display: inline !important;
            visibility: visible !important;
            color: #333 !important;
          }
        }
        
        /* Styles responsive pour mobile */
        @media screen and (max-width: 768px) {
          .header {
            flex-direction: column;
            text-align: center;
            padding: 10px;
          }
          .faculty-logo {
            margin: 0 0 10px 0;
            max-width: 60px;
          }
          .title {
            font-size: 16px !important;
          }
          .info {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 15px;
          }
          .info-item {
            padding: 8px;
          }
          table {
            font-size: 7pt !important;
          }
          th, td {
            padding: 4px !important;
          }
          .result-card {
            padding: 10px !important;
          }
          .footer {
            padding: 15px;
            font-size: 8pt;
          }
        }
      </style>
    </head>
    <body>
      ${contentHTML}
    </body>
    </html>
  `;
}

// Obtenir le nom complet de la spécialité
function getSpecialtyFullName(specialty) {
  const specialtyNames = {
    'IA': 'Intelligence Artificielle & Applications',
    'SID': 'Systèmes d\'Information & Données', 
    'RSID': 'Réseaux & Systèmes Distribués'
  };
  return specialtyNames[specialty] || specialty;
}

// Chargement des préférences utilisateur
function loadUserPreferences() {
  try {
    // Charger le thème
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      body.classList.add('dark');
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      if (darkModeToggle) {
        darkModeToggle.checked = true;
      }
    } else {
      body.classList.remove('dark');
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      if (darkModeToggle) {
        darkModeToggle.checked = false;
      }
    }
    
  } catch (error) {
    console.error('Erreur lors du chargement des préférences:', error);
  }
}

// Initialisation du bouton scroll-to-top
function initializeScrollToTop() {
  const fabButton = document.getElementById('fab-scroll-top');
  if (!fabButton) return;
  
  // Fonction pour afficher/masquer le bouton selon la position de scroll
  function toggleFabVisibility() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 300) {
      fabButton.classList.remove('hidden');
    } else {
      fabButton.classList.add('hidden');
    }
  }
  
  // Fonction pour faire défiler vers le haut
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Événements
  window.addEventListener('scroll', toggleFabVisibility);
  fabButton.addEventListener('click', scrollToTop);
  
  // Vérification initiale
  toggleFabVisibility();
}

