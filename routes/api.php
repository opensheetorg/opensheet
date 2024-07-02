<?php

use App\Http\Controllers\Mobile\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/mapp/auth', [AuthController::class, 'issueMobileSession'])->middleware('throttle:6,1');

Route::middlware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::delete('/mapp', [AuthController::class, 'revokeAllMobileSessions']);

    Route::delete('/mapp/{tokenId}', [AuthController::class, 'revokeMobileSession']);

});
