exports.dataConversion = (data) => {
    const json = JSON.stringify({ data })
    const parsed = JSON.parse(json)
    return parsed.data
}
