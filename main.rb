require 'json'

json_data = File.read('buffers.json')
data = JSON.parse(json_data)

data['buffers'] ||= []
data['buffers'] << JSON.parse(ARGV[0])

File.open('buffers.json', 'w') do |file|
  file.write(JSON.pretty_generate(data))
end
