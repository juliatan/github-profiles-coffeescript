get '/javascript/:name.js' do |name|
  coffee name.to_sym
end