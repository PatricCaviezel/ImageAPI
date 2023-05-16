require 'json'

json_data = File.read('test.json')
data = JSON.parse(json_data)

data['buffers'] ||= []
data['buffers'] << JSON.parse(ARGV[0])

File.open('test.json', 'w') do |file|
  file.write(JSON.pretty_generate(data))
end
