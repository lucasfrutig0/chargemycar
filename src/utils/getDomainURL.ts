export function getDomainUrl(url: string): string {
  try {
    // Create a new URL object from the input string
    const urlObj = new URL(url)
    // Return the hostname of the URL object, which includes the domain
    return urlObj.hostname
  } catch (error) {
    // If the URL is invalid, return an empty string or a custom error message
    console.error('Invalid URL:', error)
    return ''
  }
}
