'use strict';

angular.module('myBoardApp').factory('NetworkService', function() {
	var Network = {};

	var json = {
	profile: '',
	score: '{"score":46.23006980503695,"scoreDelta":{"dayChange":-0.08283634998721112,"weekChange":0.8664921910043901,"monthChange":3.2901149154288944},"bucket":"40-49"}',
	influences: '{"myInfluencers":[{"entity":{"id":"9789","payload":{"kloutId":"9789","nick":"Behance","score":{"score":82.78006491140584,"bucket":"80-89"},"scoreDeltas":{"dayChange":0.15310865326470946,"weekChange":0.2774671223674119,"monthChange":0.26937468009128906}}}},{"entity":{"id":"25895702623720179","payload":{"kloutId":"25895702623720179","nick":"twbootstrap","score":{"score":58.64205295048876,"bucket":"50-59"},"scoreDeltas":{"dayChange":-0.19684972106342968,"weekChange":-1.4013397802715843,"monthChange":-1.6497406268041601}}}},{"entity":{"id":"33777004236190978","payload":{"kloutId":"33777004236190978","nick":"~33777004236190978","score":{"score":43.04605202266068,"bucket":"40-49"},"scoreDeltas":{"dayChange":-0.806610861997541,"weekChange":-2.3155844193992436,"monthChange":-5.194551940804992}}}},{"entity":{"id":"567701","payload":{"kloutId":"567701","nick":"shawnsakamoto","score":{"score":38.65170374903654,"bucket":"30-39"},"scoreDeltas":{"dayChange":-0.3669909338973838,"weekChange":-2.2409006997844827,"monthChange":-2.385383677134733}}}}],"myInfluencees":[{"entity":{"id":"567710","payload":{"kloutId":"567710","nick":"thelaurencate","score":{"score":40.494958650744046,"bucket":"40-49"},"scoreDeltas":{"dayChange":-0.4643467089019424,"weekChange":-0.8809239776662565,"monthChange":-1.49045583904622}}}},{"entity":{"id":"8444254067457869","payload":{"kloutId":"8444254067457869","nick":"myappmatrix","score":{"score":40.17295177036171,"bucket":"40-49"},"scoreDeltas":{"dayChange":-0.35044078967288783,"weekChange":-0.28944683971722185,"monthChange":2.07060584063408}}}},{"entity":{"id":"85568398087790039","payload":{"kloutId":"85568398087790039","nick":"hackua","score":{"score":24.513559909588764,"bucket":"20-29"},"scoreDeltas":{"dayChange":-2.4425700718211374E-4,"weekChange":-0.6392775013487508,"monthChange":1.373898035724487}}}}],"myInfluencersCount":4,"myInfluenceesCount":3}',
	topics: '[{"id":"9219221220892056274","displayName":"Mobile Applications","name":"Mobile Applications","slug":"mobile-applications","imageUrl":"http://kcdn3.klout.com/static/images/icons/generic-topic.png","topicType":"entity"},{"id":"7016133385694405924","displayName":"ActionScript","name":"ActionScript","slug":"actionscript","imageUrl":"http://kcdn3.klout.com/static/images/icons/generic-topic.png","topicType":"entity"},{"id":"7282577900455708658","displayName":"Android","name":"Android","slug":"android","imageUrl":"http://kcdn3.klout.com/static/images/topics/android_7b01e4032a91e5850574abe5f3b6d4a8.png","topicType":"entity"},{"id":"6100538096159987988","displayName":"Architecture","name":"Architecture","slug":"architecture","imageUrl":"http://kcdn3.klout.com/static/images/architecture-1365204256512.jpg","topicType":"sub"},{"id":"4638100901725948803","displayName":"CSS","name":"CSS","slug":"css","imageUrl":"http://kcdn3.klout.com/static/images/topics/design.png","topicType":"entity"}]'

	};

	Network.klout = {
		score : angular.fromJson(json.score),
		influences : angular.fromJson(json.influences),
		topics : angular.fromJson(json.topics)
	};

	return Network;
});
