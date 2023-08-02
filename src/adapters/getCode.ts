export default async function getCode(url: string) {
  try {
    const response = await fetch(url)
    return await response.text()
  } catch (err) {
    console.log(err)
    return ""
  }
}
