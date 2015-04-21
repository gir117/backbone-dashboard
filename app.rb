require 'bundler'
Bundler.require()

#=====================================CONNECT TO DATABASE

ActiveRecord::Base.establish_connection(
  adapter: :postgresql,
  database: :dashboard
)


require './models/card.rb'

get '/' do
  erb :index
end

get '/variables' do
  erb :variables
end


#=====================================API ROUTES

#retrieve card parameters - link backbone and sinatra
def card_params
  request_body = JSON.parse(request.body.read.to_s)
  card_args = { title: request_body["title"], message: request_body["message"]} #create new hash
end

#get all cards
get '/api/cards' do
  content_type :json
  cards = Card.all
  cards.to_json
end

#get a specific card
get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

#add a new card
post '/api/cards' do
  # content_type :json
  card_params()
  # card = Card.create(params[:card])
  card = Card.create(card_args) #this makes sinatra and backbone talk
  card.to_json
end

#update a specific card
put '/api/cards/:id' do
  # content_type :json
  card = Card.find(params[:id].to_i)
  card.update(card_params)
  card.to_json
end

patch '/api/cards/:id' do
  card = Card.find(params[:id].to_i)
  card.update(card_params)

  content_type :json
  card.to_json

end

#delete a card
delete '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.destroy

end
