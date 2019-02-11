import de from "../languages/de.js"
import ru from "../languages/ru.js"

const getHomeText = (lang) => {
  return lang === 'de'? de.getHomeText() : ru.getHomeText()
}

const getTeamContent = (lang) => {
  return lang === 'de'? de.getTeamContent() : ru.getTeamContent()
}

const getAboutContent = (lang) => {
  return lang === 'de'? de.getAboutContent() : ru.getAboutContent()
}

const getWorkContent = (lang) => {
  return lang === 'de'? de.getWorkContent() : ru.getWorkContent()
}

const getServicesContent = (lang) => {
  return lang === 'de'? de.getServicesContent() : ru.getServicesContent()
}

const getFeaturesContent = (lang) => {
  return lang === 'de'? de.getFeaturesContent() : ru.getFeaturesContent()
}

const getContactContent = (lang) => {
  return lang === 'de'? de.getContactContent() : ru.getContactContent()
}

export default {
	getHomeText,
	getTeamContent,
	getAboutContent,
	getWorkContent,
	getServicesContent,
	getFeaturesContent,
	getContactContent
}