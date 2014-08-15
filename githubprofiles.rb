require 'sinatra'

get '/' do
  erb :index
end

# saves us from having to type out coffee coffee/gitprofiles.coffee in terminal
# to create the javascript file
# note the javascript route here, which we use in the index.erb file
get '/javascript/:name.js' do |name|
  coffee "coffee/#{name}".to_sym
end