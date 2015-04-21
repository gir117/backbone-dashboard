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


#=====================================API ROUTES
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
  content_type :json
  card = Card.create(params[:card])
  card.to_json
end

#update a specific card
put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
  card.to_json
end

patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
  card.to_json

end

#delete a card
delete '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.destroy

end
